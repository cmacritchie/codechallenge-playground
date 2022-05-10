//Insert Meeting Times here
const meetingTimes = ["08:36-9:35", "08:38-9:39", "09:40-09:51", "18:36-19:35", "06:36-6:35", "18:40-19:45" ]

//main executable
const main =() => {
    const meetingMinutes = meetingTimes.map(meeting => {
        return stringToMinutes(meeting)
    })
    const sorted = meetingMinutes.sort((a,b) => a.startTime - b.startTime)
    const mergedMeetings = mergeIterate(sorted)
    const formattedMergedMeetings = minutesToStrings(mergedMeetings)
    console.log(formattedMergedMeetings)
    
}

//changes time in minutes and converts to time String
const timeFormat = (timeMinutes) => {
    const hours = Math.floor(timeMinutes / 60)
    const remaingingMinutes = timeMinutes % 60
    return `${hours.toString().padStart(2, '0')}:${remaingingMinutes.toString().padStart(2, '0')}`
}

//converts meeting object to string 
minutesToStrings = (mergedList) => {
    return mergedList.map(entry => {
        return `${timeFormat(entry.startTime)}-${timeFormat(entry.endTime)}`
    })
}

//format and get minutes for start /end`
const stringToMinutes = (times) => {
    const meetingFormat = times.split("-")
    const [startTime, endTime] = meetingFormat.map(time => {
        [hours, minutes] = time.split(":")
        return (parseInt(hours) * 60) + parseInt(minutes)
    })
    return {
        startTime,
        endTime
    }
}

//iterates through the sorted array and constructs a merged list of meeting times in minutes
const mergeIterate = (sortedTimes) => {
    return sortedTimes.reduce((acc, currentMeeting, index) => {
        if(index === 0) {
            return [currentMeeting]
        }
        [recentMeeting, ...otherMeetings] = acc
        if (recentMeeting.startTime <= currentMeeting.startTime &&  currentMeeting.startTime <= recentMeeting.endTime) {
            const mergedMeeting = {
                startTime: recentMeeting.startTime,
                endTime: Math.max(currentMeeting.endTime, recentMeeting.endTime)
            }
            return [mergedMeeting, ...otherMeetings]
        }
        return [currentMeeting, ...acc]
    },[])
}

main()





