import Dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import relativeTime from 'dayjs/plugin/relativeTime'
import zhCn from 'dayjs/locale/zh-cn'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

Dayjs.extend(isBetween)
Dayjs.extend(isSameOrBefore)
Dayjs.extend(isSameOrAfter)
Dayjs.extend(relativeTime)
Dayjs.locale(zhCn)
Dayjs.extend(utc)
Dayjs.extend(timezone)
Dayjs.tz.setDefault('Asia/Shanghai')
export const dayjs = Dayjs
