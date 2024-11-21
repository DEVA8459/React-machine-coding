## 1. Adding to git 
git add .
git commit -m "your msg"
git push -u origin main

to undo git add .
    git rm -r --cached .

## 2. git Branch


### 1. **Create a New Branch**
To create and switch to a new branch:
```bash
git checkout -b new-branch-name
```

This command does two things:
- Creates a branch called `new-branch-name`.
- Switches to the new branch.

If you only want to create the branch without switching:
```bash
git branch new-branch-name
```

---

## 2. **Make Changes and Commit**
After switching to the new branch, make changes to your files. Then, stage and commit them:
```bash
git add .
git commit -m "Describe your changes here"
```

---

## 3. **Switch Between Branches**
To switch to another branch:
```bash
git checkout branch-name
```

To see all branches:
```bash
git branch
```

---

## 4. **Merge Branches**
### a. Merge a Feature Branch into Another Branch
Switch to the branch you want to merge into (e.g., `main`):
```bash
git checkout main
```

Merge the other branch into it:
```bash
git merge feature-branch
```

If there are no conflicts, the merge will complete successfully.

---

### b. Merge Two Feature Branches
Switch to one of the feature branches (e.g., `feature-1`):
```bash
git checkout feature-1
```

Merge the other feature branch:
```bash
git merge feature-2
```

---

### c. Resolve Merge Conflicts (If Any)
If there are conflicts during the merge, Git will notify you. You can resolve conflicts in your text editor or IDE. Once resolved:
1. Stage the resolved files:
   ```bash
   git add resolved-file
   ```
2. Complete the merge:
   ```bash
   git commit
   ```

---

## 5. **Push Changes to Remote**
After merging, push the updated branch to the remote repository:
```bash
git push origin branch-name
```

---

## 6. **Delete Merged Branches (Optional)**
After merging, you can delete the feature branch locally and remotely:
- **Delete Locally:**
  ```bash
  git branch -d branch-name
  ```
- **Delete Remotely:**
  ```bash
  git push origin --delete branch-name
  ```

---

## Example Workflow: Merging Two Branches into `main`
1. Switch to `main`:
   ```bash
   git checkout main
   ```

2. Merge `feature-1`:
   ```bash
   git merge feature-1
   ```

3. Merge `feature-2`:
   ```bash
   git merge feature-2
   ```

4. Push changes to the remote:
   ```bash
   git push origin main
   ```

That's it! Let me know if you'd like further clarification on any step. 😊