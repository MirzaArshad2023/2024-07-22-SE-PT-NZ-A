const room = {
    number: 23,
    toJSON() { return '{"LatestNumber" : ' + this.number + '}'}
    }

    console.log(JSON.stringify(room))