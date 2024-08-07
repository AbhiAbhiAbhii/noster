import { google } from "googleapis"
import { NextRequest, NextResponse } from "next/server"
import 'dotenv/config'
import { writeFile } from "fs/promises"
import { join } from "path"
import { Readable } from "stream"

export const config = {
    api: {
        bodyParser: false
    }
}

export async function POST(req) {

    // const data = await req.formData()
    // console.log(data, 'SERVER')

    // const { name, age } = await req.json()
    // const auth = new google.auth.GoogleAuth({
    //     credentials: {
    //         client_email: process.env.GOOGLE_CLIENT_EMAIL,
    //         client_id: process.env.GOOGLE_CLIENT_ID,
    //         private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDnC5QW4eZI4lNX\n7ddir5V8rs/eJa+7vLpD157mSxChoN6LOQnXOYPMk1KQjrhm3sv6kdTP/HBOt1/Z\ntYhhTk4//ai8BMD60ZDAfXJwGLvCo7e0R72/Fce1E9ejTtZv2dv5j7bMeEfX+8JB\nkqVkZG9VWIqsLkmWLscemeT/t3hx76HjhVhwOYpHdHiN/ng4smGnyPb7R+Lq1ZI/\n+0WhLn018fWrzdURLUaCu4rfFFLJrtfnYrLi/JnvGGva39wyz0R1qmcdEv7jbVTj\nQ6TcbvZd5Rcw0AI9M7LVUTZalA60JeRYHYkNONRw9VLWq+PPQJtYs3e9gcr04rPZ\ny5rKAV0ZAgMBAAECggEADHMzxi3jFl9XxV+0IQW8JO1YlyxptVCcquY2EkvOOB9u\njosCzD21q/LuWorORgDQdg6grJp6RMud1yHwmOm6zrjw/Dy3V2yug6je30p956Wh\n0w2gnGjki43nq02mwX04XNDRNWBv4qQW2ii4T9oXo74zLscJwRWBNlVtoRf2XhFE\n6vth2LI+QpMWToyHXCQFKJw65A6n+iYsTIiWJLG0ZRGnyc+2odNJ5gYAoFYn95aR\nosUHu2SWWY145bHTjf8zJesJKlI4piW/N0/2K6a0awcEPtTTTM6RrWMbzWOxCEJG\nqSR8KqK+rmPmVJy2BsBle6klX9HQdWSCpq6deqiJOQKBgQD7QvUtgg8IjMt7oDNt\nctj5qiRK19blLP+nfbn077cRkPWhiZOdYOvxXqkvIN2sADUfrjkcqCzxexc5s+vg\nsH+dIgG8hISEl+vkndGg9N9lNC3GMJ8fCYDHiMk5zV7Ny/xOeiIatCW1XwAfsnYt\nWZyCEpuPj6fryJOMp+BgHLUf1QKBgQDrZwUuAWffgjzEs+Kbq0ECdV6Jr0Wjr7Bo\nMESHONExhgdSQFjZTZn438r7DWzQ7CjXHa0xb/WyqgXgC209q1vJBruwZ9CgnZvM\neY2ZXySQ7bwnSyQVWxIZqOZIablyDxqMqq9B5w277f8mtV5xO98pU4fwOmDULQAG\n0GZg9+OuNQKBgQC2oJV6rWTl7whb5DZdIDQLTBqy960vyIROJnlKSg6DSxzufAP6\nSR9VwlswcTAOO9xhGY5TgP2hy7k27MrO9xraiIRAlQWJJq+D7R4YYsQZWFLJEkAm\nHA8peQfh5p848EKEfAtb44LhEJsTbvCsx8yVUpcVQvJn09NDUiYpVdRkvQKBgGlI\nPyHPUSS+u+0BwyT6V+4AjlKoCE5oIk7G369WswEiP54C13oA4g9UEBVucK+UH8Pu\nKurEdy/8KPqGQcpmHHvxPfpsw/tB4k92QeVJjzIekZtFWRMQEy1UxAG4/07LAIXP\nROkFrLfTft1SGrYsH+f8yvyfL3VV1wA1LsTJuZPNAoGAa1i1dTOvKqYOig0KG8wS\n4xoGHwEaYToQmF5kOxgHk52f+GIey5XZfo6/27O4tx8uo3Ah0VEfuxEP0bHvrRYQ\nR3fm30RgZc8jx4F/AINTQx2dWABs9BjaFyToQ/PMBAFgBJqv4jcAFNSNba8zpwHc\nhuzUmZTxfpSCliO9kheUb1I=\n-----END PRIVATE KEY-----\n"
    //     },
    //     scopes: [
    //         'https://www.googleapis.com/auth/drive',
    //         'https://www.googleapis.com/auth/drive.file',
    //         'https://www.googleapis.com/auth/spreadsheets'
    //     ]
    // })

    // const sheet = google.sheets({version: 'v4', auth})
    // await sheet.spreadsheets.values.append({
    //     auth,
    //     spreadsheetId: process.env.GOOGLE_SHEET_ID,
    //     range: "Sheet1!A2:B",
    //     valueInputOption: 'USER_ENTERED',
    //     requestBody: {
    //         values:[[name, age]]
    //     }
    // })


    const data = await req.formData()
    const file = data.get("image")

    console.log("AAAAAAAAAAAAAAAAAAAAA")

    if(!file) return NextResponse.json({ success: false })

    console.log("BBBBBBBBBBBBBBBB")

    // Convert it into bytes so it can be understood by api's
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const bufferStream = new Readable()
    bufferStream.push(buffer)
    bufferStream.push(null)

    console.log("CCCCCCCCCCCCCCCCCCCCC")

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            client_id: process.env.GOOGLE_CLIENT_ID,
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDnC5QW4eZI4lNX\n7ddir5V8rs/eJa+7vLpD157mSxChoN6LOQnXOYPMk1KQjrhm3sv6kdTP/HBOt1/Z\ntYhhTk4//ai8BMD60ZDAfXJwGLvCo7e0R72/Fce1E9ejTtZv2dv5j7bMeEfX+8JB\nkqVkZG9VWIqsLkmWLscemeT/t3hx76HjhVhwOYpHdHiN/ng4smGnyPb7R+Lq1ZI/\n+0WhLn018fWrzdURLUaCu4rfFFLJrtfnYrLi/JnvGGva39wyz0R1qmcdEv7jbVTj\nQ6TcbvZd5Rcw0AI9M7LVUTZalA60JeRYHYkNONRw9VLWq+PPQJtYs3e9gcr04rPZ\ny5rKAV0ZAgMBAAECggEADHMzxi3jFl9XxV+0IQW8JO1YlyxptVCcquY2EkvOOB9u\njosCzD21q/LuWorORgDQdg6grJp6RMud1yHwmOm6zrjw/Dy3V2yug6je30p956Wh\n0w2gnGjki43nq02mwX04XNDRNWBv4qQW2ii4T9oXo74zLscJwRWBNlVtoRf2XhFE\n6vth2LI+QpMWToyHXCQFKJw65A6n+iYsTIiWJLG0ZRGnyc+2odNJ5gYAoFYn95aR\nosUHu2SWWY145bHTjf8zJesJKlI4piW/N0/2K6a0awcEPtTTTM6RrWMbzWOxCEJG\nqSR8KqK+rmPmVJy2BsBle6klX9HQdWSCpq6deqiJOQKBgQD7QvUtgg8IjMt7oDNt\nctj5qiRK19blLP+nfbn077cRkPWhiZOdYOvxXqkvIN2sADUfrjkcqCzxexc5s+vg\nsH+dIgG8hISEl+vkndGg9N9lNC3GMJ8fCYDHiMk5zV7Ny/xOeiIatCW1XwAfsnYt\nWZyCEpuPj6fryJOMp+BgHLUf1QKBgQDrZwUuAWffgjzEs+Kbq0ECdV6Jr0Wjr7Bo\nMESHONExhgdSQFjZTZn438r7DWzQ7CjXHa0xb/WyqgXgC209q1vJBruwZ9CgnZvM\neY2ZXySQ7bwnSyQVWxIZqOZIablyDxqMqq9B5w277f8mtV5xO98pU4fwOmDULQAG\n0GZg9+OuNQKBgQC2oJV6rWTl7whb5DZdIDQLTBqy960vyIROJnlKSg6DSxzufAP6\nSR9VwlswcTAOO9xhGY5TgP2hy7k27MrO9xraiIRAlQWJJq+D7R4YYsQZWFLJEkAm\nHA8peQfh5p848EKEfAtb44LhEJsTbvCsx8yVUpcVQvJn09NDUiYpVdRkvQKBgGlI\nPyHPUSS+u+0BwyT6V+4AjlKoCE5oIk7G369WswEiP54C13oA4g9UEBVucK+UH8Pu\nKurEdy/8KPqGQcpmHHvxPfpsw/tB4k92QeVJjzIekZtFWRMQEy1UxAG4/07LAIXP\nROkFrLfTft1SGrYsH+f8yvyfL3VV1wA1LsTJuZPNAoGAa1i1dTOvKqYOig0KG8wS\n4xoGHwEaYToQmF5kOxgHk52f+GIey5XZfo6/27O4tx8uo3Ah0VEfuxEP0bHvrRYQ\nR3fm30RgZc8jx4F/AINTQx2dWABs9BjaFyToQ/PMBAFgBJqv4jcAFNSNba8zpwHc\nhuzUmZTxfpSCliO9kheUb1I=\n-----END PRIVATE KEY-----\n"
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets'
        ]
    })

    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")

    const drive = google.drive({ version: "v3", auth })
    const sheets = google.sheets({ version: "v4", auth })

    try {
        // Upload the image to Google Drive
        console.log("ENTERED TRY CATCH block", file)
        const driveResponse = await drive.files.create({
            requestBody: {
                name: file.name,
                mimeType: file.type
            },
            media: {
                mimeType: file.type,
                body: bufferStream
            }
        })

        console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEE")
        console.log("DRIVE RESPONSE", driveResponse.data.id)
        
        // Make the file public
        await drive.permissions.create({
            fileId: driveResponse.data.id,
            requestBody: {
                role: 'reader',
                type: 'anyone'
            }
        })

        
        console.log("FFFFFFFFFFFFFFFFFF")
        // Get the file link
        // const fileLink = `https://drive.google.com/uc?id=${driveResponse.data.id}`
        const fileLink = `https://drive.google.com/file/d/${driveResponse.data.id}/view`
        console.log("GGGGGGGGGGGGGGGGGGGGGGGGGG")
        console.log(fileLink, "FILE LINK")

        // Append the link to Google Sheets
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "Sheet1!A2:B",
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[fileLink]]
            }
        })

        return NextResponse.json({ success: true, fileLink })
    } catch (error) {
        console.error('Error uploading file to Google Drive or Sheets:', error)
        return NextResponse.json({ success: false, error: error.message })
    }

}

