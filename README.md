# User Statistics

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/justoverclock/user-statistics.svg)](https://packagist.org/packages/justoverclock/user-statistics) [![Total Downloads](https://img.shields.io/packagist/dt/justoverclock/user-statistics.svg)](https://packagist.org/packages/justoverclock/user-statistics)

A [Flarum](http://flarum.org) extension. Add some user statistics in flarum posts, this extension require `clarkwinkelmann/flarum-ext-likes-received` and will be installed automatically.

## Usage
Remember to set the permission to "All" for clarkwinkelmann/flarum-ext-likes-received to make it works for guests.

## Installation

Install with composer:

```sh
composer require justoverclock/user-statistics:"*"
```

## Updating

```sh
composer update justoverclock/user-statistics:"*"
php flarum migrate
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/justoverclock/user-statistics)
- [GitHub](https://github.com/justoverclock/user-statistics)
- [Discuss](https://discuss.flarum.org/d/PUT_DISCUSS_SLUG_HERE)
