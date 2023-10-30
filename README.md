# Cypress-burn-E2E-tests

## Overview

Burn tests are a software testing technique aimed at assessing the stability and reliability of a system. They are conducted under extreme conditions such as high load, high temperature, and high pressure. The goal is to identify issues that may arise under intensive usage scenarios and address them before the software is released.

## Why "burn" the tests?

Practicing "burning" tests with Cypress can be beneficial for several reasons:

1. **Identification of unstable tests**: Repeatedly running the same test helps identify if the test is unstable or "flaky," meaning it passes and fails intermittently without any code changes.
2. **Confirmation of failures**: If a test consistently fails during the "burn" practice, it may indicate a real issue with the application being tested.
3. **Assessment of test reliability**: "Burn" practice can help assess the reliability of a test. If a test consistently passes during the "burn," it can increase confidence in the test's robustness.
4. **Identification of performance issues**: Running the same test repeatedly can help identify performance issues such as memory leaks that only become apparent over time or with frequent repetitions.
5. **Prioritization of new or changed specs**: In some cases, modified and new specs are executed first before the rest of the tests. They also "burn" the modified and new specs by running them several times in succession.

## Cypress-grep

To assist in these tests, you can use **Cypress-grep**. Cypress-grep is a Cypress plugin that allows you to filter tests based on a search string or specific tags. This can be useful for running only a subset of tests rather than all tests in a file.

To use `cypress-grep` for "burn," you can pass the number of times you want to run the tests through the environment variable name `burn`, `grepBurn`, or `grep-burn`. This will cause the same test to be run multiple times in a row, which is helpful for identifying unstable or "flakey" tests.

Here's an example of how you can use `cypress-grep` for "burn":

```bash
npx cypress run --env burn=10,grep=testsBurn
```

In this example, `your_test_name` is the name of the test you want to run, and `10` is the number of times you want it to be executed.

## Running the Tests

To run the Cypress Burn tests in your development environment, follow these steps:

1. Make sure you have Node.js installed on your system.
2. Clone this repository and navigate to the project's root directory.
3. Run `npm install` to install project dependencies.
4. Execute the tests with the burn tag using `npm run e2e:tests:burn` to start test execution.

## Contributions

We welcome contributions to enhance our Burn tests. Feel free to open issues, submit pull requests, and help improve our quality assurance process.

## References

https://www.npmjs.com/package/@cypress/grep
