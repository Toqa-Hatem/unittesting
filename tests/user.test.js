const it = require("ava").default;
const chai = require("chai");
var expect = chai.expect;
const startDB = require("../helpers/DB");
const { MongoMemoryServer } = require("mongodb-memory-server");
const {addUser, getUsers, getSingleUser,deleteUser, validateUserBody} = require("../controllers/user");
const sinon = require("sinon");
const utils = require("../helpers/utils");
const User = require("../models/user");

it.before(async (t) => {
  t.context.mongod = await MongoMemoryServer.create();
  process.env.MONGOURI = t.context.mongod.getUri("itiUnitTesting");
  await startDB();
});

it.after(async (t) => {
  await t.context.mongod.stop({ doCleanUp: true });
});
it("should create one user", async (t) => {
  // setup
  const fullName = "touka raafat";
  const request = {
    body: {
      firstName: "touka",
      lastName: "raafat",
      age: 25,
      job: "developer",
    },
  };
  expectedResult = {
    fullName,
    age: 25,
    job: "developer",
  };
  // exercise
  // sinon.stub(utils, 'getFullName').returns(fullName);
  const stub1 = sinon.stub(utils, "getFullName").callsFake((fname, lname) => {
    expect(fname).to.be.equal(request.body.firstName);
    expect(lname).to.be.equal(request.body.lastName);
    return fullName;
  });
  t.teardown(async () => {
    await User.deleteMany({
      fullName: request.body.fullName,
    });
    stub1.restore();
  });
  const actualResult = await addUser(request);
  // verify
  expect(actualResult._doc).to.deep.equal({
    _id: actualResult._id,
    __v: actualResult.__v,
    ...expectedResult,
  });
  const users = await User.find({
    fullName,
  }).lean();
  expect(users).to.have.length(1);
  expect(users[0]).to.deep.equal({
    _id: actualResult._id,
    __v: actualResult.__v,
    ...expectedResult,
  });
  t.pass();
});
it("should get users", async (t) => {
  const users = await getUsers();
  expect(users).to.be.an("array");
  t.pass();
});

it("should get user by ID", async (t) => {
  const userId = "someUserId";

  const user = await getSingleUser(userId);

  expect(user).to.be.an("object");

  t.pass();
});

it("should delete user by ID", async (t) => {
  const userIdToDelete = "someUserIdToDelete";

  await deleteUser(userIdToDelete);

  const deletedUser = await findUserById(userIdToDelete);

  expect(deletedUser).to.be.null;

  t.pass();
});
