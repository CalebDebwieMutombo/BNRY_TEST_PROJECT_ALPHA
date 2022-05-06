### Automated Tests Matter

Automated tests are programs that automate the task of testing your software, and they matter because they give developers quick feedback on errors. They interface with applications to perform actions and compare the actual result with the expected output you've previously defined. Thus, automated tests enable fast error feedback on the code developed, making the development process more reliable. In other words, developers can see errors quickly and fix them before software goes to production.

Manual test can be time consuming and still have errors as the tester would have to follow the same path severel times 
an application driven by automated tests can provide many benefits, including:

1. Quality control: we know what to expect from the software’s behavior.
Clear documentation: well-written tests are a good way to document software features.

2. Long-term value: even if you have to expend more effort up front to develop automated tests, you'll gain long-term dividends.

3. Time back: the more the tests are run, the more time they save you.
Energy back: the longer the lifecycle of a project, the more important automated tests become. 

### Types of testing
There are 3 main categoeries of Testing that we learned about in College 

Unit Testing
Unit tests are the smallest portion of a test that can be written. The main goal of these tests is to create a formal and official registry of the code as a live document. Instead of having to register the code elsewhere, you can register the code documentation as tests. Thus, you don't need to explain how the code works in another document other than the test suites themselves. An example of this is adding comments to code.

Unit tests can also test individual functionalities in the software. They are very quick to run and can run many times during the development of a function. They are easy to understand, cheap to develop, and quick to update and run.

Integration Testing
Integration tests verify the observable behavior and the integration between multiple functions. Thus, they offer broader coverage and are run less frequently. They guarantee adequate usage of third-party libraries and check whether the unit being tested performs the expected functionality.

Integration tests take more time to run (a few seconds). They are "medium-sized" tests and cost a little bit more to develop.

E2E (End-to-End) Tests 
E2E tests verify the whole feature in the same way that a user would experience the application. They should be run when a feature is completed, as they check whether or not the feature is correct. They are more expensive to develop, take a long time to run, and are run fewer times during the project lifecycle.

### DON'T FORGET!!!
Tests cannot tell you if your software works, they can only prove that it doesn’t.
Not using automated tests will make you write too much code before checking that the feature works.

For my tests I will be using Jest and Enzyme with React.js


Jest is a Javascript-based test runner and can run fast tests in parallel. It can run in watch mode and run tests every time files are changed. It also generates code coverage reports that help us understand the test passing percentage. 

Snapshot testing is another great feature in Jest. As its name suggests, Snapshot allows components to be tested by taking a snapshot of what the component should look like internally once it has been rendered.

Enzyme is a Javascript testing utility for React, developed by Airbnb, which makes React component testing much easier. 

You can find these testing files in BNRY_Test\BNRY_Test_Project\src and also in package.js BNRY_Test\BNRY_Test_Project

enzyme-to-json helps make Snapshot tests more readable; by adding it to the snapshotSerializers, it is automatically applied to each Snapshot

collectCoverageFrom indicates which set of files coverage information should be collected for. In our case, we have restricted Jest to run on all files with the .js extension except src/index.js, as it is usually just boilerplate code, which doesn’t need to be tested.

coverageReporters tells Jest to output the coverage report via terminal instead of creating an HTML page to display these results. As a developer, it is much easier to check the terminal to understand where you stand in terms of test coverage.

The first block will create a new snapshot of the NewsSource component.

The second block will do an assertion to check if the value in h1 is equal to the variable named title, which stores 'Test NewsSource'. If true, the test will pass.

### Running the Test
Type npm test in the root directory of your project via cmd/terminal. This will run all the test files in the CRA project and output the results to the terminal/cmd.

### Results
Run npm test --watchAll --coverageReport  to generate a code coverage report. This report will show in-depth information about each file, including statement, branch, functions, and line coverage percentage.
