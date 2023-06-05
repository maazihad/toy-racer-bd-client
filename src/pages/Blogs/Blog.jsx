import { Helmet } from "react-helmet";
import Spinner from "../Shared/Spinner/Spinner";
import { useNavigation } from "react-router-dom";

const Blog = () => {
   const navigation = useNavigation();
   if (navigation.state === 'loading') {
      return <Spinner />;
   }
   return (
      <>
         <Helmet>
            <title>Toy-Racer BD - Blog page</title>
         </Helmet>
         <section className="bg-red-100 min-h-[calc(100vh-50px)]">
            <h2 className="text-4xl text-center font-black text-red-700 py-10">Answer the Questions</h2>
            <div className="space-y-3 max-w-7xl mx-auto pb-10">

               {/* Question-1 */}
               <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:mx-8 shadow-md shadow-red-500">
                  <div className="collapse-title text-xl font-medium">
                     <h2 className="text-red-900 font-bold">Q#1 : What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                  </div>
                  <div className="collapse-content text-red-900">
                     <p className="text-lg">
                        <strong>Access Token : </strong>
                        An access token is a means of verifying that a user is the correct user of a particular account. It is typically issued by an authorization server after a user successfully logs in or grants permission to an application.
                     </p>
                     <p className="text-lg">
                        <strong>Refresh Token : </strong>
                        A refresh token is a refresh tone given to the user for authorization depending on the duration of the access token. The refresh token becomes invalid when the access token expires.
                     </p>
                     <b className="text-lg">
                        In generally recommended to store the access token in a secure storage mechanism that offers protection against cross-site scripting(XSS) atacks and ensures data confidentiality. Such as browser storage (this not recommended), or an HTTP-only cookie. On the other hand, refresh token are typically stored on the server-side in a secure method.
                     </b>
                  </div>
               </div>

               {/* Question-2 */}
               <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:mx-8 shadow-md shadow-red-500">
                  <div className="collapse-title text-xl font-medium">
                     <h2 className="text-red-900 font-bold">Q#2 : Compare SQL and NoSQL databases?</h2>
                  </div>
                  <div className="collapse-content text-red-900">
                     <p className="text-lg">
                        <strong>SQL(Structured Query Language) and NoSQL(Not Only Structured Query Language) databases are two different types of database management systems: Here&apos;s comparison between SQL & NoSQL : </strong>
                     </p>
                     <ol>
                        <li><b>1 :</b> SQL databases are primarily callded RDBMS or Relational databases. On the other hand, NoSQL databases are primarily called as Non-relational or distributed database. </li>
                        <li><b>2 :</b> SQL is a structured query language. On the other hand, NoSQL is a No declarative query language. </li>
                        <li><b>3 :</b> SQL databases are table-based databases. On the other hand, NoSQL databases can be document based, key-value pairs, graph databases. </li>
                        <li><b>4 :</b> SQL databases have a predefined schema. On the other hand, NoSQL databases use dynamic schema for unstructured data.</li>
                        <li><b>5 :</b> Oracle, Postgres, MySQL and MS-SQL on based SQL. On the other hand, MongoDB, Redis, Neo4j, Cassandra, Hbase on based NoSQL.</li>
                     </ol>

                  </div>
               </div>

               {/* Question-3 */}
               <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:mx-8 shadow-md shadow-red-500">
                  <div className="collapse-title text-xl font-medium">
                     <h2 className="text-red-900 font-bold">Q#3 : What is express js? What is Nest JS?</h2>
                  </div>
                  <div className="collapse-content text-red-900">
                     <b className="text-lg">
                        Express.js and NestJS are both popular web application frameworks, but both are used in different uses cases :
                     </b>
                     <p className="text-lg">
                        <b>Express.Js :</b>Express.Js is a minimal and flexible Node.js framework that provides a robust set of features for building web and mobile applications. Express.js user used simplicity, that are allowing developers to have fine-grained control over the applications structure and behavior.
                     </p>
                     <p className="text-lg">
                        <b>NestJS :</b>NestJS is a progressive Node.js framework for building efficient, scalable are reliable server-side applications. It is built on top of Express.js and provides a more structured way of building applications with TypeScript. NestJs also used for building server-sed applications, RESTful APIs, real-time applications, and backends for modern web and mobile applications.
                     </p>

                  </div>
               </div>

               {/* Question-4 */}
               <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:mx-8 shadow-md shadow-red-500 ">
                  <div className="collapse-title text-xl font-medium">
                     <h2 className="text-red-900 font-bold">Q#4 : What is MongoDB aggregate and how does it work?</h2>
                  </div>
                  <div className="collapse-content text-red-900">
                     <span className="text-lg">In programming, we often run a series of operations on a collection of items. </span>
                     <b className="text-lg">
                        In MongoDB aggregation operations process data records and return computed results.The aggregation ability to aggregate data on the client side with JavaScript, but we can use MongoDB to run operations on the server against our collections stored in the database before the result is returned to the client.
                     </b>
                     <p className="text-lg">
                        <b>In the following overview of how the aggregate oprations works : </b>
                        When you need to do more complex aggregation, you can use the MongoDB aggregation pipeline. Aggregation pipelines are collections of stages that, combined with the MongoDB query syntax, will allow you to obtain an aggregated result.
                        <br />
                        <b>The Aggregation Pipeline Method&apos;s : </b>
                        <br />
                        <li><b>Math Stage : </b> In the stage the aggregation pipeline is typically the <code>$match</code> stage. It filters the documents based on specified criteria, similar to the query operation.</li>
                        <li><b>Projection Stage : </b> This stage <code>$project</code> allows you to reshape and modify the documents in the pipeline.</li>
                        <li><b>Group Stage : </b> The <code>$group</code> stage is used for grouping documents based on a specific field or set of files.</li>
                        <li><b>Sort Stage : </b> The <code>$sort</code> stage orders the documents based on specified criteria. It can sort documents in ascending or descending order by one or more fields.</li>
                        <li><b>Limiting Stage : </b> The <code>$limit</code> stage restricts the number of documents that will be passed to the subsequent stages.</li>
                        <li><b>Skip Stage : </b> The <code>$skip</code> stage skips a specified number of documents in the pipeline.</li>
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Blog;