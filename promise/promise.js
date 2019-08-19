class Promise {
  constructor(executor){
    //控制状态，使用了一次之后，接下来的都不被使用
    this.status = 'pendding'
    this.value = undefined
    this.reason = undefined
  }
}