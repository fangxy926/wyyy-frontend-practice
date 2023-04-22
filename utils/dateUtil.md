https://www.npmjs.com/package/date-fns
https://github.com/date-fns/date-fns
https://date-fns.org/docs/Getting-Started  api文档


1. isToday():判断所传入日期是否为今天
2.isYesterday(): 判断是否为昨天
3.isTomorrow()判断是否为明天. 用法与isToday(), isYesterday()用法相同,就不加以累述了.
  isAfter() 第一时间是否在第二个时间后面
  isBefore() 第一时间是否在第二个时间前面
  isFuture() 是否是将来的时间
  isPast()是否是过去的时间
  isDate() 给的参数是否是个时间（参数类型any）
  parse()
  getTime() 根据给定的时间获得时间戳（可以传date，string，number）
4.format(): 格式化日期函数 第一个参数为必传参数,可以为date, string, number, 第二个format为日期格式 eg:format(date, 'YYYY-MM-DD HH:mm:ss')
5. addDays():获得第n天之后的日期;
6.addHours(): 获得当前小时之后的小时(比如现在5点, 得到七点的时间).
7.addMinutes():获得当前分钟之后n分钟的时间
8.addMonths(): 获得当前月之后n个月的月份
9.subDays():获得当前日期之前n天的日期
10: subHours(): 获得当前时间之前n小时的时间
11:subMinutes(): 获得当前时间之前n分钟的时间
12: subMonths():获得当前月份之前n个月的时间
13: differenceInDays(): 获得两个时间相差几天,
14:differenceInHours();获得两个时间相差的小时.
15: differenceInMinutes(): 获得两个时间相差的分钟
16: differenceInMonths():获得两个时间相差月份
17: differenceInWeeks(): 获得两个时间相差的周数
18: differenceInYears():获得两个时间相差的年数
19:startOfDay():返回传入日期一天开始的Date对象(一天开始的时间)
20: endOfDay(): 获得传入日期一天的结束时间(与startOfDay对应)
21: startOfMonth():获取月份的第一天
22: endOfMonth(): 获得月份的最后一天
23: getDate(): 获取传入的日期是几号;
24: getDay(): 获取传入的日期是星期几
25: getMonth(): 返回传入时间的月份
26: getMinutes(): 返回传入时间的分钟数
27:getHours():返回传入时间的小时数
28: getISOWeek(): 返回传入时间所在月份的第几周．
29: isEqual(): 判断传入的时间是否相等
30:max: 取得时间数组中的最大值
31: min(): 取得时间数组中的最小值
32:distanceInWordsToNow 给定时间距离现在多久
isLeapYear():是否是闰年
