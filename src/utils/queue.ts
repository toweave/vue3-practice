// SleepTime 等待 time 时间，毫秒数
const SleepTime = (start = 200, end = 300) => {
  /**
   * Random 的种子利用的是系统时钟种子。
   * 而 Windows 系统时钟的更新频率大概在 10ms 左右（各个版本不一样），
   * 而这个 for 循环的执行显然要快得多，那每次利用的就是同一个种子，
   * 种子相同，Random 产生相同的随机数（即使实例不同也一样）。
   **/
  return new Promise((resolve) => {
    // 等待 xx ms 时间
    const time = RandomRange(start, end)
    setTimeout(() => {
      resolve({ time: time })
    }, time)
  })
}

const RandomRange = (min = 0, max = 100) => {
  const random = parseInt(String(Math.random() * (max - min + 1) + min), 10)
  return random
}

class Queue {
  private gather: any[]
  private uniqueId: number
  public is_order: boolean
  public is_completed: boolean
  constructor() {
    this.gather = [];
    this.uniqueId = 0;
    this.is_order = true;
    this.is_completed = true;
  }

  // 接收者
  receive() {
  }

  // 发送者
  send() {}

  // 取消订阅
  unsubscribe(id: any) {
    this.gather = this.gather.filter((item) => item !== id);
    this.is_completed = this.gather.length === 0;
  }

  // 订阅
  async subscribe (fn: any, ...args: any[]) {
    const fn_id = Date.now();
    this.is_completed = false;
    this.gather.push(fn_id);
    const res = await fn(args[0]);
    this.unsubscribe(fn_id);
    return res
    // this.gather.push(fn_id);
  }

  withUniqueId(fn: any) {
    const that = this;
    return async function(...args: any[]) {
      console.log("args ::", args)
      const fn_id = Date.now();
      that.gather.push(fn_id);
      const res = await fn.apply(that, args);
      that.unsubscribe(fn_id);
      return res;
    };
  }
}

export { SleepTime, RandomRange, Queue };