class AlarmClock {
    constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error("Отсутствуют обязательные аргументы");
        }
        
        if(time in (this.alarmCollection.map(object => object.time))) {
            console.warn("Уже присутствует звонок на это же время");
        }

        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true,
            }
        )
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((object) => object.time !== time);
    }

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
    }

    start() {
        if(this.intervalId !== null) {
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((object) => {
                if(object.time === this.getCurrentFormattedTime() && object.canCall) {
                    object.canCall = false;
                    object.callback();
                }
            })
        },1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((object) => {object.canCall = true});
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
