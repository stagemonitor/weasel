declare var DEBUG: bool;

declare type EumEvent = {
  initialize: () => mixed,
  name: string,
  time: ?number
}

declare type EumState = {
  name: string,
  onEnter: () => mixed
}
