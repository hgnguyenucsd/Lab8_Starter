# Lab 8 - Starter

Henry Nguyen

Check Your Understanding
Fill your answer in your README.md

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

1. Within a Github action that runs whenever code is pushed
1. Manually run them locally before pushing code
1. Run them all after all development is completed

A: I would go with 1. Within a Github action that runs whenever code is pushed. Number 2 doesn't make any sense because we're trying to fit our automated tests in so why would we manually run them? Number 3 doesn't make sense because if we run tests after development is completed it may be hard to go back and make changes. It's best that we have some form of automation when we push our code up to continue testing it so we know what is wrong and can easily detect it.

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

A: No since the test cases are for user actions from start to finish. It wouldn't make any sense to run E2E tests just to check if a function is returning an output that we expected.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

A: No I would not because sending messages back and forth between users may have many underlying components. Not only that, messaging between users involves the emulation of their actions from start to finish. If someone types a certain message, hits send, what might the person on the other end receive. There seems to be too many parts that simple unit tests may not cover. Although, it could be done in a series of unit tests combined possbily?

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

A: Yes I would use unit tests to test the "max message length". The only thing that we're checking for if the length of a message that is being typed up surpasses a certain length. That is something that unit tests are fully capable of handling. There doesn't need to be automated user emulations as well for that.
