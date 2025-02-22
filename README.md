In this example, the action IDs _do not match_ and the server action fails sometimes:

1. Run `pnpm docker:prod:lb` to run two **almost identical** load-balanced containers
2. Repeatedly click the Submit button
3. In the logs, you'll see that the two containers take turns in responding to the action, but it **succeeds only half of the time**
