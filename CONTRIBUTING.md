# Universal IDE

The following sections outline the process all changes to the
repositories go through. All changes, regardless of whether they are from
newcomers to the community or from the core team follow the same process and are
given the same level of review.


## Code of conduct

All members of the community must abide by the
[Code of Conduct](./CODE_OF_CONDUCT.md). Only by respecting each other can we
develop a productive, collaborative community.

## Issues

GitHub issues can be used to report bugs or submit feature requests.

When reporting a bug please include the following key pieces of information:

- The version of the project you were using (version number, git commit, etc)
- Operating system you are using
- The exact, minimal, steps needed to reproduce the issue. Submitting a 5 line
  script will get a much faster response from the team than one that's hundreds
  of lines long.

## Third-party code

- Place a comment over the code about it source if it is restricted to use in other orgs.

### Adding a new third-party dependency to project

- Check in a pristine copy of the code with LICENSE and METADATA files. You do
  not have to include unused files, and you can move or rename files if
  necessary, but do not modify the contents of any files yet.
- Once the pristine copy is merged into master, you may modify the code.
- Make sure that library is not conflicting with other library.

### LICENSE

The license for the code must be in a file named LICENSE. If it was distributed
like that, you're good. If not, you need to make LICENSE be a file containing
the full text of the license. If there's another file in the distribution with
the license in it, rename it to LICENSE (e.g., rename a LICENSE.txt or COPYING
file to LICENSE). If the license is only available in the comments or at a URL,
extract and copy the text of the license into LICENSE.

You may optionally document the generation of the LICENSE file in the
local_modifications field of the METADATA file.

If there are multiple licenses for the code, put the text of all the licenses
into LICENSE along with separators and comments as to the applications.

---

Except as otherwise noted, the content of this page is licensed under the
[Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/),
and code samples are licensed under the
[MIT](https://www.mit.edu/~amini/LICENSE.md)