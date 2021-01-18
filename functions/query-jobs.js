import { MongoClient } from "mongodb";

export async function handler(event, context) {
    if (!MONGO_DB_URI) {
        return {
            statusCode: 500,
            body: "Internal Server Error",
        }
    }

    const { MONGO_DB_URI } = process.env;
    const client = await (new MongoClient(MONGO_DB_URI, { useNewUrlParser: true })).connect();
    const jobs = client.db("hirelatam").collection("jobs");

    console.log(event);
    console.log(context);
    console.log(jobs);

    return {
        statusCode: 200,
        body: jobs
    };
};
