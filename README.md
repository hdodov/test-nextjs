In this example, the action IDs match and the server action works:

1. Run `pnpm docker:prod:lb` to run two **identical** load-balanced containers
2. Repeatedly click the Submit button
3. In the logs, you'll see that the two containers take turns in responding to the action, but it **always succeeds**
