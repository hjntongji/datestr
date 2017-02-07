Date.prototype.toCommonSay = function() {
    var day_of_week_str = [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
    ];
    var time = this.getTime();
    var curTime = new Date();
    var ctime = curTime.getTime();

    var H = this.getHours();
    var isAm = H <= 12 ? true : false;
    var h = isAm ? H : (H - 12);
    var m = this.getMinutes();
    var d1 = parseInt(ctime / (24 * 3600 * 1000), 10);
    var d2 = parseInt(time / (24 * 3600 * 1000), 10);
    var gap_day = d1 - d2;

    var d = this.getDay();

    var datestr;
    var gap_time = ctime - time;
    timestr = (isAm ? '上午' : '下午') + h + ':' + m;

    if (gap_time > 0) {
        if (gap_time < 60 * 1000) {
            datestr = timestr;
        } else if (gap_time < 3600 * 1000) {
            datestr = parseInt(gap_time / (60 * 1000), 10) + '分钟前 ' + timestr;
        } else if (gap_day === 0) {
            datestr = parseInt(gap_time / (3600 * 1000), 10) + '小时前 ' + timestr;
        } else if (gap_day === 1) {
            datestr = '昨日 ' + timestr;
        } else if (gap_day < 7) {
            datestr = day_of_week_str[d] + ' ' + timestr;
        } else {
            datestr = this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate() + ' ' + timestr;
        }
    } else {
        gap_time = 0 - gap_time;
        gap_day = 0 - gap_day;
        if (gap_time < 60 * 1000) {
            datestr = timestr;
        } else if (gap_time < 3600 * 1000) {
            datestr = parseInt(gap_time / (60 * 1000), 10) + '分钟后 ' + timestr;
        } else if (gap_day === 0) {
            datestr = parseInt(gap_time / (3600 * 1000), 10) + '小时后 ' + timestr;
        } else if (gap_day === 1) {
            datestr = '明日 ' + timestr;
        } else {
            datestr = this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate() + ' ' + timestr;
        }
    }
    return datestr;
}
