const { MongoClient, ServerApiVersion } = require('mongodb');
// ENTER THE PASSWORD const uri = "mongodb+srv://mongo:PASSWORD@cluster0.lkf0zag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const collection = client.db("sample_airbnb").collection("listingsAndReviews");
    const pipeline = [
      {
        '$match': {
          'accommodates': {
            '$gt': 4
          },
          'price': {
            '$lt': 500
          },
          'amenities': 'Hair dryer'
        }
      }, {
        '$sort': {
          'price': 1
        }
      }, {
        '$project': {
          'name': 1,
          'amenities': 1,
          'price': 1,
          'images': 1,
          'description': 1
        }
      }, {
        '$limit': 5
      }
    ];

    const agg = await collection.aggregate(pipeline).toArray();
    console.log(agg);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
