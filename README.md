# exitzero

make a CLI command always return an exit status of 0. This can be useful in combination with a `watch` process to ensure things keep running if the target command returns a non-zero exit status.

## Installation

```sh
npm install exitzero --global
```

## Example
```sh
flet@lappy:~$ ls nonexist
ls: cannot access nonexist: No such file or directory
flet@lappy:~$ echo $?
2
flet@lappy:~$ exitzero ls nonexist
ls: cannot access nonexist: No such file or directory
flet@lappy:~$ echo $?
0
```


## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [nixt](https://github.com/vesln/nixt): Simple and powerful testing for command-line apps
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers


## License

ISC
