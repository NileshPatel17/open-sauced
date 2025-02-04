# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

## Setup


```sh
$ git clone https://github.com/bdougie/open-sauced
$ cd open-sauced
$ npm install
```

## Building

```sh
$ npm run build
```

## Testing

```sh
$ npm run test
```

```sh
$ npm run test:watch
```

```sh
$ npm run lint
```

## Runing the server

```sh
// You will need to create you own GitHub access token to query the GitHub API
$ GRAPHCOOL_ENDPOINT="https://api.graph.cool/simple/v1/XXXXXXX" GITHUB_TOKEN="XXXXXXXXX" npm start
```

## Pull Requests

We actively welcome your pull requests.

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.

## License

By contributing to the Open Sauced project, you agree that your contributions will be licensed
under its [MIT license](LICENSE).
