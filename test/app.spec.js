import server from '@/bin/www';
import db from '@/database';

let chai = require('chai');
let chaiHttp = require('chai-http');

// Assertion style
chai.should();
chai.use(chaiHttp);

describe('App Endpoint', function() {

  // Antes de todas las pruebas, configura la base de datos en memoria
  before(async function() {
    await db.sync({ force: true });
  });

  // Después de todas las pruebas, cierra la conexión de la base de datos
  after(async function() {
    await db.close();
  });

  describe('Task API', function() {

    /**
     * Test the GET /tasks with no tasks
     */
    describe('GET /tasks', () => { 
      it('It should retrive an object with an error message and a code 404', (done) => {
        chai.request(server)
          .get('/tasks')
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('success').eq(false);
            res.body.should.have.property('code').eq(404);
            res.body.should.have.property('error').eq('No tasks found');
            done();
          });
      });
    });

    /**
     * Test the POST /task
     */
    describe('POST /task', () => {
      it('It should create a new task and return it', (done) => {
        const task = {
          name: "Task 2",
          description: "Task 2 description",
          author: "Author 2",
          isComplete: false
        };
        chai.request(server)
          .post('/tasks')
          .send(task)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('success').eq(true);
            res.body.should.have.property('code').eq(201);
            res.body.should.have.property('data').should.be.a('object');
            res.body.data.should.have.property('name').eq('Task 2');
            res.body.data.should.have.property('description').eq('Task 2 description');
            res.body.data.should.have.property('author').eq('Author 2');
            res.body.data.should.have.property('isComplete').eq(false);
            res.body.should.have.property('message').eq('Task created successfully');
            done();
          });
      });
    });

    /**
     * Test the GET /tasks with one task
     */
    describe('GET /tasks', () => { 
      it('It should retrive an array with one task', (done) => {
        chai.request(server)
          .get('/tasks')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('success').eq(true);
            res.body.should.have.property('data');
            res.body.data.should.be.a('array').that.has.lengthOf(1);
            res.body.data[0].should.have.property('name').eq('Task 2');
            res.body.data[0].should.have.property('description').eq('Task 2 description');
            res.body.data[0].should.have.property('author').eq('Author 2');
            res.body.data[0].should.have.property('isComplete').eq(false);
            res.body.should.have.property('message');
            done();
          });
      });
    });

    /**
     * Test the GET /task/:id
     */
    describe('GET /task/:id', () => { 
      it('It should retrieve a task by id', (done) => {
        const taskID = 1; // Assuming the task ID is 1
        chai.request(server)
          .get(`/task/${taskID}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('success').eq(true);
            res.body.should.have.property('data');
            res.body.data.should.be.a('object');
            res.body.data.should.have.property('name').eq('Task 2');
            res.body.data.should.have.property('description').eq('Task 2 description');
            res.body.data.should.have.property('author').eq('Author 2');
            res.body.data.should.have.property('isComplete').eq(false);
            res.body.should.have.property('message').eq('Task retrieved successfully');
            done();
          });
      });
    });

    /**
     * Test the PUT /task/:id
     */
    describe('PUT /task/:id', () => {
      it('It should update a task by id', (done) => {
        const taskID = 1; // Assuming the task ID is 1
        const updatedTask = {
          name: "Updated Task",
          description: "Updated Task Description",
          author: "Updated Author",
          isComplete: true
        };
        chai.request(server)
          .put(`/task/${taskID}`)
          .send(updatedTask)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('success').eq(true);
            res.body.should.have.property('code').eq(200);
            res.body.should.have.property('data').should.be.a('object');
            res.body.data.should.have.property('name').eq('Updated Task');
            res.body.data.should.have.property('description').eq('Updated Task Description');
            res.body.data.should.have.property('author').eq('Updated Author');
            res.body.data.should.have.property('isComplete').eq(true);
            res.body.should.have.property('message').eq('Task updated successfully');
            done();
          });
      });
    });

    /**
     * Test the DELETE /task/:id
     */
    describe('DELETE /task/:id', () => {
      it('It should delete a task by id', (done) => {
        const taskID = 1; // Assuming the task ID is 1
        chai.request(server)
          .delete(`/task/${taskID}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('success').eq(true);
            res.body.should.have.property('code').eq(200);
            res.body.should.have.property('data').should.be.a('object');
            res.body.data.should.have.property('name').eq('Updated Task');
            res.body.data.should.have.property('description').eq('Updated Task Description');
            res.body.data.should.have.property('author').eq('Updated Author');
            res.body.data.should.have.property('isComplete').eq(true);
            res.body.should.have.property('message').eq('Task deleted successfully');
            done();
          });
      });
    });

  });
  
});
