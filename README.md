### Command: `npx . [length] [flag] ...`
---

### Explanation:
**Flag**
1) A flag defines what charset is going to be used to generate a password
    * This charset is also called *generation charset*
2) The generator recognizes only *valid* flags
3) To be valid a flag must contain *only* the following symbols (a.k.a. *requested symbols*): `l`, `d`, `s`, `c` - and begin with a dash (or two: `-dd` or `--dd`)
    * l = Latin: adds `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ` to the charset
    * d = Digits: adds `0123456789` to the charset
    * s = Special characters: adds `~!@#$%^&*()_+-='\"|/.?,` to the charset
    * c = Cyrillic: adds `абвшдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ` to the charset
        > **Example 1:** `--lsd` or `-dsl` are valid flags, while `-fsl` or `--djio` are not

        > **Example 2:** with the flag `--lsd` the charset will contain latin chars, cyrillic chars and digits
4) An order of the symbols in a valid flag is not important: `--lsd` will generate the same charset as `--sld` or `--dls`
5) Requested symbols may be present in a valid flag more than once: `--lsd` is simmilar to `--llsd` or `--llssddd`
    > **NB:** adding requested symbols into a valid flag more than once WILL increase the chance of the symbols from the corresponding alphabet to be added 
6) Command may contain more than one valid flag: `--lsd` creates the simmilar charset as `--lsd -ls` or `-sd --ll`
    > **NB:** usage of the requested symbol in multiple flags WILL increase the chance of the symbols from corresponding alphabet too.
7) Usage of *invalid* flags is allowed too. However such flags will not affect the generation charset: `-dqw` or `--fsd` do not define the charset.
8) If no valid flag is passed then the generation charset contains only latin chars and digits (like if the `-ld` flag was used).

**Password's length**
1) Length is a number and is passed like if it was a flag (though without dashes). 
    > **Example:** `npx . --sd 50` will generate password 50 chars long.
2) Valid length contains only digits: `npx . --sd 50` is fine, while `npx . --sd 50j` is not.
3) Valid length may be passed before, after or even between flags (any flags, since invalid will not be recognized).
    > **Example:** `npx . 50 --ds` or even `npx . -d -sss - qwaw 50 -lsd -llls` is fine.
4) Only the first valid length will be recognized: `npx . 50 5 -lsd` will generate a password of 50 chars, not of 5.
6) If no valid length is passed then a generated password will contain 20 characters. 

---
**Installation & usage:**
1) Clone this repository. 
2) `Cd` to the newly created directory.
3) To generate a password run ``npx . [flag] [length]``