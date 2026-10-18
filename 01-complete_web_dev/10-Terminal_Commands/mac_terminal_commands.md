# macOS Terminal Commands Cheatsheet

> Quick reference for navigation, file management, system info, permissions, network, and more
> Updated: 2026-10-18

---

## 📁 Navigation

| Command              | Action                                                  |
| -------------------- | ------------------------------------------------------- |
| `pwd`                | Print working directory (show current full path)        |
| `ls`                 | List files & folders (names only)                       |
| `ls -l`              | Detailed list — permissions, owner, size, modified date |
| `ls -la`             | Detailed list including **hidden files** (dotfiles)     |
| `ls -lh`             | Human-readable sizes (KB/MB/GB) in detailed list        |
| `cd <path>`          | Change to specified directory                           |
| `cd ..`              | Go **up one level** to parent folder                    |
| `cd`                 | Jump straight to your **home folder** (`~`)             |
| `cd -`               | Go back to the **previous directory** you were in       |
| `open .`             | Open current folder in **Finder** GUI                   |
| `open <folder/file>` | Open specific item with default app                     |

---

## 📄 File & Folder Management

| Command                            | Action                                                |
| ---------------------------------- | ----------------------------------------------------- |
| `mkdir <name>`                     | Create new empty folder                               |
| `mkdir -p parent/child/grandchild` | Create **nested folders** in one go                   |
| `rm <file>`                        | Delete a file (permanent — no Trash!)                 |
| `rm -r <folder>`                   | Delete folder + all its contents                      |
| `rm -rf <folder>`                  | **Force-delete** folder — no prompts, irreversible ⚠️ |
| `cp <source> <destination>`        | Copy a file                                           |
| `cp -r <source> <destination>`     | Copy a folder & everything inside it                  |
| `mv <source> <destination>`        | **Move** file/folder; also used to **rename**         |
| `touch <filename>`                 | Create a new empty file instantly                     |
| `cat <file>`                       | View full contents of a file                          |
| `less <file>`                      | Scroll through file; press `q` to exit                |
| `head <file>`                      | Show **first 10 lines** of a file                     |
| `tail <file>`                      | Show **last 10 lines** of a file                      |
| `tail -f <file>`                   | Watch file **live** — updates as it grows             |
| `ln -s <original> <linkname>`      | Create a **symbolic link** (shortcut)                 |

---

## ⚙️ System & Info

| Command           | Action                                                  |
| ----------------- | ------------------------------------------------------- |
| `uname -a`        | Show OS, kernel version, architecture                   |
| `sw_vers`         | Exact macOS version & build number                      |
| `df -h`           | **Disk space** — all drives, human-readable             |
| `du -sh <folder>` | Total size of a specific folder                         |
| `du -sh *`        | Sizes of every item in current folder                   |
| `top`             | Real-time **process monitor**; `q` to quit              |
| `htop`            | Better, friendlier process viewer (`brew install htop`) |
| `ps aux`          | List **all running processes** system-wide              |
| `kill <PID>`      | Stop process gracefully by its ID                       |
| `kill -9 <PID>`   | **Force-kill** unresponsive process                     |
| `sudo <command>`  | Run command as **administrator/root** ⚠️                |
| `history`         | Show your **past commands** (use `!n` to re-run #n)     |
| `!!`              | Repeat the **very last command** — great with `sudo !!` |
| `which <command>` | Show where a program is installed                       |
| `cal`             | Display current month calendar                          |
| `uptime`          | How long Mac has been running + load averages           |

---

## 🔐 Permissions

Format: `user-group-others` → `rwx rwx rwx`

| Command                        | Action                                               |
| ------------------------------ | ---------------------------------------------------- |
| `ls -l`                        | View current permissions on items                    |
| `chmod 755 <file/folder>`      | `rwxr-xr-x` — standard for scripts & folders         |
| `chmod 644 <file>`             | `rw-r--r--` — standard for regular files             |
| `chmod +x <file>`              | Make file **executable** (run as program)            |
| `chmod -R 644 <folder>`        | Apply permission to **all files inside** recursively |
| `chown user:group <item>`      | Change owner & group                                 |
| `chown -R user:group <folder>` | Change ownership for everything inside folder        |

---

## 🌐 Network

| Command                              | Action                                                 |
| ------------------------------------ | ------------------------------------------------------ |
| `ipconfig getifaddr en0`             | Your **local/private** IP address (Wi‑Fi)              |
| `curl ifconfig.me`                   | Your **public/external** IP address                    |
| `ping <host>`                        | Test connection speed/reachability (`ping google.com`) |
| `nc -zv <host> <port>`               | Check if a **port is open** (`nc -zv 8.8.8.8 53`)      |
| `netstat -an`                        | List all active network connections                    |
| `networksetup -listallhardwareports` | All network interfaces & hardware addresses            |
| `scp <file> user@host:/path/`        | Secure copy file to remote server                      |
| `ssh user@host`                      | Connect to remote machine over SSH                     |

---

## 📦 Homebrew (Package Manager)

| Command                                                                                           | Action                                       |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` | **Install Homebrew**                         |
| `brew install <package>`                                                                          | Install a tool/app (`brew install git node`) |
| `brew upgrade`                                                                                    | Update **all** installed packages            |
| `brew update`                                                                                     | Refresh package catalog list                 |
| `brew list`                                                                                       | Show everything installed via Homebrew       |
| `brew search <name>`                                                                              | Find available packages                      |
| `brew uninstall <package>`                                                                        | Remove a package                             |
| `brew cleanup`                                                                                    | Delete old versions & free space             |

---

## 🔍 Search & Find

| Command                      | Action                                       |
| ---------------------------- | -------------------------------------------- |
| `grep <text> <file>`         | Search for text **inside** a file            |
| `grep -r <text> <folder>`    | Recursively search **all files** in folder   |
| `grep -i <text> <file>`      | Search **case-insensitive**                  |
| `find <path> -name "<name>"` | Locate file by exact or partial name         |
| `mdfind <name>`              | Use **Spotlight index** — much faster search |
| `mdfind -onlyin . <name>`    | Spotlight search only current folder         |

---

## ⌨️ Keyboard Shortcuts (Terminal Editor)

| Shortcut         | What It Does                                                                 |
| ---------------- | ---------------------------------------------------------------------------- |
| `Ctrl + A`       | Jump to **start** of command line                                            |
| `Ctrl + E`       | Jump to **end** of line                                                      |
| `Ctrl + U`       | **Clear entire line** you’re typing                                          |
| `Ctrl + W`       | Delete **one word backward**                                                 |
| `Ctrl + C`       | **Abort/cancel** running command immediately                                 |
| `Ctrl + R`       | **Search history** — type part of old command to find it                     |
| `Tab`            | **Auto-complete** filenames, folders, commands — press twice to list options |
| `Option + ← / →` | Move cursor **word by word**                                                 |

---

## 💡 macOS-Specific Extras

| Command                 | Action                                                      |
| ----------------------- | ----------------------------------------------------------- |
| `pbcopy < file.txt`     | Send file contents **to clipboard**                         |
| `pbpaste > newfile.txt` | Save clipboard contents **to file**                         |
| `say "Hello"`           | Mac **speaks** the text aloud                               |
| `afplay <audiofile>`    | Play sound/audio file directly                              |
| `man <command>`         | Show **official manual/documentation** — press `q` to close |
| `open -a "App Name"`    | Launch specific app from terminal                           |
| `caffeinate`            | Prevent Mac from **sleeping** until you press `Ctrl + C`    |

---

## ⚠️ Quick Safety Notes

- `rm -rf` deletes **without Trash & without undo** — double-check what you typed!
- Commands starting with `sudo` run with full system power — be sure you trust them
- Press `q` to close `less`, `man`, `top` — easy to forget!
- `cd` alone always brings you home — your safe place 🏠

## 🔄 Keeping Your Fork Up To Date

You may have noticed something while watching the previous videos... Do you have to always fork the Open Source project every time master get's updated? What happens if somebody makes an update to the original project and now your forked project is out of sync and outdated? Luckily for you, there is an easy way to always make sure your fork has the most up to date version of the original project. Here is how:

Once you are in your forked project directory in your command prompt....

1. Type `git remote -v` and press Enter. You'll see the current configured remote repository for your fork.

```bash
git remote -v
origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
```

2. Type git remote add upstream, and then paste the URL you would copy from the original repository if you were to do a git clone. Press Enter. It will look like this:

```bash
git remote add upstream https://github.com/zero-to-mastery/PROJECT_NAME.git
```

3. To verify the new upstream repository you've specified for your fork, type `git remote -v` again. You should see the URL for your fork as origin, and the URL for the original repository as `upstream`.

```bash
git remote -v
origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
```

Now, you can keep your fork synced with the upstream repository with a few Git commands.

One simple way is to do the below command from the master of your forked repository:

```bash
git pull upstream master
```
