import { differenceInCalendarDays, addHours } from 'date-fns';

export default class Item {
  constructor(payload) {
    const { name, pid, price, product_image, update_time } = payload;
    
    this.name = name;
    this.pid = pid;
    this.price = price;
    this.productImage = product_image;
    this.updateTime = update_time;
  }

  isNew = () => {
    const now = addHours(Date.now(), 9);
    const updateTime = new Date(this.updateTime).toISOString().slice(0, 10);
    const currentTime = now.toISOString().slice(0, 10);

    const diff = differenceInCalendarDays(currentTime, updateTime);

    return diff < 1;
  }
}
  
