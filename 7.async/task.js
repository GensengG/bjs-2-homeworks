class AlarmClock {
    constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
    }

    addClock(time, callback) {
        // if(arguments.length === 1 || arguments.length === 0) {
        if (time === null || callback === undefined) {
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
        let currentDate = new Date;
        const hour = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        if (minutes < 10){
            return String(hour + ":0" + minutes);
        } else {return String(hour + ":" + minutes);}
    }

    start() {
        if(this.intervalId === null) {
            return
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((object) => {
                if(object.time === getCurrentFormattedTime() && object.canCall) {
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
