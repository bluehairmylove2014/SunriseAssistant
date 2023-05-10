

const db = require("../db");
// Moment
const moment = require('moment');

function convertSentatTime(time) {
    // const diff = moment.duration(moment().diff(moment(time)));
    // // 1. If the time difference between the current time and time A is 
    // // less than 24 hours, display the number of hours.
    // // 2. If the time difference is greater than or equal to 24 hours and 
    // // less than 48 hours, display "Yesterday".
    // // 3. Otherwise, display the date in "dd/MM/YYYY" format.
    // if (diff.asHours() < 24) {
    //     return Math.floor(diff.asHours());

    // } else if (diff.asHours() >= 24 && diff.asHours() < 48) {
    //     return 'Yesterday';
    // } else {
    //     return moment('2023-05-09T16:27:22.637Z').format('DD/MM/YYYY');
    // }


    // Or use moment
    return moment(time).fromNow(true);
}
exports.getDialogList = function (req, res, next) {
    try {
        const uid = req.query.uid;
        db.query(`SELECT dl.dialog_id, dl.user_id, dl.created_at, dl.dialog_avt, dl.is_mark, dl.dialog_name, d.msg as last_msg, d.send_at as last_msg_sent_at
                FROM DialogList dl
                INNER JOIN (
                    SELECT DISTINCT ON (dialog_id) dialog_id, msg, send_at
					FROM Dialogs
					WHERE dialog_id IN (
					  SELECT dialog_id
					  FROM DialogList
					  WHERE user_id = 1
					)
					ORDER BY dialog_id, send_at DESC
                ) d ON dl.dialog_id = d.dialog_id
                WHERE dl.user_id = ${uid};`,
            (err, dbres) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log(dbres.rows.length)
                    let dialogList = dbres.rows.map(dialog => {
                        return {
                            dialog_id: dialog.dialog_id,
                            dialog_name: dialog.dialog_name,
                            last_msg: dialog.last_msg,
                            last_msg_sent_at: convertSentatTime(dialog.last_msg_sent_at),
                            dialog_avt: dialog.dialog_avt,
                            is_mark: dialog.is_mark,
                            created_at: dialog.created_at
                        }
                    })
                    res.status(200).json(dialogList);
                }
            }
        )
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
exports.getDialogData = function (req, res, next) {
    try {
        const did = req.query.did;
        db.query(`SELECT sender, msg, send_at
                    FROM Dialogs 
                    WHERE dialog_id = ${did}`,
            (err, dbres) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    let dialogList = dbres.rows.map(dialog => {
                        return {
                            sender: dialog.sender,
                            msg: dialog.msg,
                            send_at: convertSentatTime(dialog.send_at)
                        }
                    })
                    res.status(200).json(dialogList);
                }
            }
        )
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
exports.assistantResponse = function (req, res, next) {
    try {

    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}