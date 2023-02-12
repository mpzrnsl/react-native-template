#!/usr/bin/env ts-node
import ora from "ora";

const spinner = ora("This is the post-init script");

new Promise((resolve) => {
  spinner.start();

  // do something
})
  .then(() => {
    spinner.succeed();
  })
  .catch((error) => {
    spinner.fail(error);
    throw new Error(
      "Something went wrong during the post init script execution"
    );
  });
