## Getting Started

### Prerequisites

- Rxjs
- JQUery

### Installation

```sh
$ npm install
```

### Running App

```sh
$ npm start
```

## RxJS Notes

### Reactive Programming

- Programming paradigm that works with asynchronous data streams
- Data streams can be created from many things,
  - UI Events
  - Http Request
  - File System
  - Array like Objects.

### Stream

- Sequence of ongoing events ordered in time that emits a value, error & completed

<p align="center">
  <img width="400" alt="Stream" src="./img/stream.png">
</p>

### Observables

- Used to watch these streams & emit functions
- Can be subscribed by an observer
- Will constantly watching streams & update accordingly
- We can interact with data streams as any regular array

<p align="center">
  <img width="400" alt="Stream" src="./img/observables.png">
</p>

### Reactive Extension/ReactiveX

- Library for composing Asynchronous program by using observable sequence.
- Provides a list of operators to filter, select, transform, combine & composable observables


## Covered Details

- Examining data streams from events
- Creating observables from array like objects.
