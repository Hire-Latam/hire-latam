const { MongoClient } = require('mongodb');

exports.handler = async function (event, context) {
    const { MONGO_DB_URI } = process.env;

    if (!MONGO_DB_URI) {
        return {
            statusCode: 500,
            body: "Internal Server Error",
        }
    }

    const client = new MongoClient(MONGO_DB_URI, { useNewUrlParser: true });
    try {
        const { q: textQuery } = event.queryStringParameters;

        await client.connect();

        const collection = client.db("hirelatam").collection("jobs");

        let query = {};
        if (textQuery) {
            query = {
                $text: {
                    $search: textQuery,
                    $caseSensitive: false,
                },
            };
        }

        const jobs = await collection.find(query).sort({ createdOn: -1 }).toArray();

        return {
            statusCode: 200,
            body: JSON.stringify(jobs),
        };
    } catch (error) {
        console.error(error)
        return {
            statusCode: 500,
            body: "Internal Server Error",
        }
    } finally {
        client.close();
    }
};
