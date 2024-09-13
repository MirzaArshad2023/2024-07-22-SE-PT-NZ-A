class Laptop {
  _hardDiskType = "HDD"; // protected property, meant to be internal
  #numOfCPUFans = 1
  constructor(brand) {
    this.brand = brand; // public property, can be used externally by instances
  }
  getHDiskType() {
    this.#logInformation("getHDiskType callled")
    return this._hardDiskType;
  } // public method to access protected property
  getCPUFansInfo()
  {
    this.#logInformation("getCPUFansINfo callled")
    return this.#numOfCPUFans;
  }
  #logInformation(message)
  {
    console.log(message)
  }
}

let lenovoLaptop = new Laptop("Lenovo")
console.log(lenovoLaptop.getHDiskType())
console.log(lenovoLaptop.brand)
console.log(lenovoLaptop.getCPUFansInfo())
