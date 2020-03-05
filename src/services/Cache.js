export default class Cache {
  constructor() {
    this._data = {};
  }

  add(path, folder) {
    this._data[path] = folder;
    return folder;
  }

  contains(path) {
    return this._data.hasOwnProperty(path);
  }

  get(path) {
    return this._data[path];
  }

  remove(...paths) {
    paths
      .filter(path => this.contains(path))
      .forEach(path => delete this._data[path]);
  }

  clear(){
      this.data = {};
  }
}
