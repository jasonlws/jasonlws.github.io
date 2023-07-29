---
title: Git Cheat Sheet
date: 2023-07-28 00:00:00 -0500
last_modified_at : 2023-07-28 00:00:00 -0500
categories: [Cheat Sheet]
tags: [Git, Cheat Sheet]
pin: true
math: true
mermaid: true
---

> Git is the free and open source distributed version control system that's responsible for everything GitHub related that happens locally on your computer. This cheat sheet features the most important and commonly used Git commands for easy reference.

## INSTALLATION & GUIS
With platform specific installers for Git, GitHub also provides the ease of staying up-to-date with the latest releases of the command line tool while providing a graphical user interface for day-to-day interaction, review, and repository synchronization.

### GitHub for Windows
https://windows.github.com

### GitHub for Mac
https://mac.github.com
For Linux and Solaris platforms, the latest release is available on the official Git web site.

### Git for All Platforms
http://git-scm.com

## SETUP
Configuring user information used across all local repositories

|**git config --global user.name "[firstname lastname]"**|set a name that is identifiable for credit when review version history|
|**git config --global user.email "[valid-email]"**|set an email address that will be associated with each history marker|
|**git config --global color.ui auto**|set automatic command line coloring for Git for easy reviewing|
|**git config --system core.editor [editor]**|Set text editor used by commands for all users on the machine. [editor] arg should be the command that launches the desired editor (e.g., vi).|
|**git config --global --edit**|Open the global configuration file in a text editor for manual editing.|

## SETUP & INIT
Configuring user information, initializing and cloning repositories

|**git init**|initialize an existing directory as a Git repository|
|**git init [directory]**|create empty Git repo in specified directory.|
|**git clone [url]**|retrieve an entire repository from a hosted location via URL|

## STAGE & SNAPSHOT
Working with snapshots and the Git staging area

|**git status**|show modified files in working directory, staged for your next commit|
|**git add [file]**|add a file as it looks now to your next commit (stage)|
|**git reset [file]**|unstage a file while retaining the changes in working directory|
|**git diff**|diff of what is changed but not staged|
|**git diff HEAD**|show difference between working directory and last commit|
|**git diff --cached**|show difference between staged changes and last commit|
|**git diff --staged**|diff of what is staged but not yet committed|
|**git commit -m "[descriptive message]"**|commit your staged content as a new commit snapshot|

## BRANCH & MERGE
Isolating work in branches, changing context, and integrating changes

|**git branch**|list your branches. a * will appear next to the currently active branch|
|**git branch [branch-name]**|create a new branch at the current commit|
|**git checkout**|switch to another branch and check it out into your working directory|
|**git checkout -b [branch]**|create and check out a new branch named [branch]. drop the -b flag to checkout an existing branch.|
|**git merge [branch]**|merge the specified branch’s history into the current one|
|**git log**|show all commits in the current branch’s history|

## INSPECT & COMPARE
Examining logs, diffs and object information

|**git log**|show the commit history for the currently active branch|
|**git log -[limit]**|show limit number of commites by [limit]|
|**git log --oneline**|condense each commit to a single line|
|**git log -p**|show the full diff of each commit|
|**git log --stat**|include which files were altered and the relative number of lines that were added or deleted from each of them|
|**git log --author="[pattern]"**|search for commits by a particular author|
|**git log --grep="[pattern]"**|search for commits with a commit message that matches [pattern]|
|**git log --graph --decorate**|--graph flag draws a text based graph of commits on left side of commit message. --decorate adds names of branches or tags of commits shown|
|**git log branchB..branchA**|show the commits on branchA that are not on branchB|
|**git log --follow [file]**|show the commits that changed file, even across renames|
|**git diff branchB...branchA**|show the diff of what is in branchA that is not in branchB|
|**git show [SHA]**|show any object in Git in human-readable format|

## TRACKING PATH CHANGES
Versioning file removes and path changes

|**git rm [file]**|delete the file from project and stage the removal for commit|
|**git mv [existing-path] [new-path]**|change an existing file path and stage the move|
|**git log --stat -M**|show all commit logs with indication of any paths that moved|

## GNORING PATTERNS
Preventing unintentional staging or commiting of files

|**logs/<br>*.notes<br>pattern*/**|save a file with desired patterns as .gitignore with either direct string matches or wildcard globs.|
|**git config --global core.excludesfile [file]**|system wide ignore pattern for all local repositories|

## SHARE & UPDATE
Retrieving updates from another repository and updating local repos

|**git remote add [alias] [url]**|add a git URL as an alias|
|**git fetch [alias]**|fetch down all the branches from that Git remote|
|**git merge [alias]/[branch]**|merge a remote branch into your current branch to bring it up to date|
|**git push [alias] [branch]**|Transmit local branch commits to the remote repository branch|
|**git push [remote] --force**|forces the git push even if it results in a non-fast-forward merge. do not use the --force flag unless you're absolutely sure you know what you're doing|
|**git push [remote] --all**|push all of your local branches to the specified remote|
|**git push [remote] --tags**|tags aren't automatically pushed when you push a branch or use the --all flag. the --tags flag sends all of your local tags to the remote repo|
|**git pull**|fetch and merge any commits from the tracking remote branch|
|**git pull --rebase [remote]**|fetch the remote's copy of current branch and rebases it into the local copy. uses git rebase instead of merge to integrate the branches|

## REWRITE HISTORY
Rewriting branches, updating commits and clearing history

|**git revert [commit]]**|create new commit that undoes all of the changes made in [commit], then apply it to the current branch.|
|**git rebase [branch]**|apply any commits of current branch ahead of specified one|
|**git rebase -i [branch]**|interactively rebase current branch onto [branch]. launches editor to enter commands for how each commit will be transferred to the new base|
|**git reset**|reset staging area to match most recent commit, but leave the working directory unchanged|
|**git reset --hard**|reset staging area and working directory to match most recent commit and overwrites all changes in the working directory|
|**git reset [commit]**|move the current branch tip backward to [commit], reset the staging area to match, but leave the working directory alone|
|**git reset --hard [commit]**|clear staging area, rewrite working tree from specified commit|
|**git clean -n**|shows which files would be removed from working directory. use the -f flag in place of the -n flag to execute the clean.|
|**git commit --amend**|replace the last commit with the staged changes and last commit combined. use with nothing staged to edit the last commit’s message|
|**git reflog**|show a log of changes to the local repository’s HEAD. add --relative-date flag to show date info or --all to show all refs.|

## TEMPORARY COMMITS
Temporarily store modified, tracked files in order to change branches

|**git stash**|Save modified and staged changes|
|**git stash list**|list stack-order of stashed file changes|
|**git stash pop**|write working from top of stash stack|
|**git stash drop**|discard the changes from top of stash stack|

## References
- [GitHub Education](https://education.github.com/git-cheat-sheet-education.pdf)


## About Myself

Please reach out to connect with me via [**Linkedin**](https://www.linkedin.com/in/jasonlws).