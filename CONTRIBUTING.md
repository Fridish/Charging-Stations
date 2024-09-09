# Information and Guidelines for Contributors


## Code of Conduct

Please make sure that you follow the [code of conduct](/CODE_OF_CONDUCT.md)

## Prerequisites

If you are new to GitHub and git version control, here are some resources to help you get started:

- [Getting Started with First Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
- [Learn the GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Git Basic Branching & Merging Guide](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
- [How to Collaborate with Pull Requests](https://docs.github.com/en/github/collaborating-with-pull-requests)
- [Git Cheatsheet](https://education.github.com/git-cheat-sheet-education.pdf)

Here are prerequisites you should meet before contributing to this repo:

- git version control configuration
- a GitHub account
- fundamental knowledge of the GitHub and git version control flow (fork, clone, push, commit, branches, etc.)

## What kind of contributions can you add?

You can contribute with enhancements, new features, maintenance. But please, make sure to create an issue before writing any code/ creating a pull request. 


## Directions for Contributing to this repo: 

### 1. Create or claim an issue. 
Before you do any coding, please claim an issue. To claim an issue, ask to be assigned an existing issue, or create an issue of your own and wait for the issue to be approved and assigned to you. Pull requests that does not have a corresponding issue will not be merged. If you are working on multiple issues, please create a separate pull request for each feature to make code review easier. Single pull requests that include multiple issues will generally not be merged. 

If you have an idea of a change or improvement, feel free to create an issue, and wait for the issue to be approved.

These are the steps to create an issue to be assigned to:

1. Check that your issue doesn't already exist. Make sure it properly explains the feature/bug/etc. 
2. If your issue is complex, consider breaking it into multiple smaller issues.
3. Ask to be assigned your issue in the discussion. Do not start working on an issue before you get the approval.

### 2. Fork the repo and create a branch
#### Make Your Own Copy of the Repository Code To Work On:

1. Select "Fork" in the top-right menu.
2. Ensure that you are forking from the main branch.
3. Create a feature branch on your fork. Make sure the branch has a name that describes the feature. For example, if you were to style the nav bar, you could name the branch `feature/navbar-styling`.
4. Clone the fork locally by running this command:

    ```sh
    git clone <fork-url>
    ```

5. Switch to your feature branch locally before making code changes. You can do this by running the command:

    ```sh
    git checkout <feature-branch-name>
    ```

6. Verify that you are working in the correct feature branch by running this command (you should see your feature branch as the selected branch):

    ```sh
    git branch
    ```

## Commit your changes & push changes to github
When writing commit messages, make sure they are short but descriptive. Comment your code to describe what it is doing. 

If the default branch of the repository you forked from has been updated (referred to as the "upstream repository"), it is recommended to keep your forked repository up to date with these changes. You can sync your fork in the web browser. 

Before pushing to gitHub, make sure that your fork is up to date and that there are no unwanted files included in the push. You could use the `git status` command to verify that the right files are being pushed.

Finally, submit your pull request, make sure to describe the changes in your pull request so that others understand the changes made and be available for discussions that may arise and to make suggested changes that may be required before merging. It is important that you describe the changes in your pull request so that it is easier to review. If your changes are visual, make sure to attach screenshots of the changes you have made.

Now you can wait for the PR to be merged and your changes will be available in the project on github, wohoo! 

Thanks for contributing!
