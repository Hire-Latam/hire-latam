const { MongoClient } = require("mongodb");

function clean(string) {
  return string.trim();
}

exports.handler = async function(event) {
  const { MONGO_DB_URI } = process.env;

  if (!MONGO_DB_URI) {
    return {
      statusCode: 500,
      body: "Internal Server Error :v",
    };
  }

  const client = new MongoClient(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const body = JSON.parse(event.body);
    const {
      jobTitle,
      companyName,
      description,
      salaryMin,
      salaryMax,
      tags,
      applicationUrl,
    } = body;

    await client.connect();
    const collection = client.db("hirelatam").collection("jobs");

    const job = {
      title: clean(jobTitle),
      company: clean(companyName),
      description: clean(description),
      salary: {
        currency: "USD",
        min: parseInt(salaryMin, 10),
        max: parseInt(salaryMax, 10),
        symbol: "$",
      },
      tags: tags.split(",").map(clean),
      applicationUrl: clean(applicationUrl),
      createdOn: new Date(),
    };

    const result = await collection.insertOne(job);
    console.log("Job Created", result);

    return {
      statusCode: 200,
      body: JSON.stringify(job),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: "Internal Server Error",
    };
  } finally {
    client.close();
  }
};
