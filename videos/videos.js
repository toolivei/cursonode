const { spawn } = require('child_process')


const parent = process.argv[2]
let videos = []

if(process.argv[2]){
    const start = parseInt(process.argv[3])
    const end = parseInt(process.argv[4])

    for (let i = start; i <= end; i++){
        videos.push(i)
    }
    
    videos.reverse();
    processVideo()
    console.log('Processo finalizado')
}


function resize(video, quality){
    const p = new Promise((resolve, reject)=>{

        const ffmpeg = spawn('./ffmpeg/ffmpeg',[
            '-i',
            `${parent}/${video}.mp4`,
            '-codec:v',
            'libx264',
            '-profile:v',
            'main',
            '-preset',
            'slow',
            '-b:v',
            '400k',
            '-maxrate',
            '400k',
            '-bufsize',
            '800k',
            '-vf',
            `scale=-2:${quality}`,
            '-threads',
            '0',
            '-b:a',
            '128k',
            `${parent}/resultado/${video}-${quality}.mp4`
        ])


/*
        const ffmpeg = spawn('./ffmpeg/ffmpeg',[
            '-i',
            `${parent}/${video}.mp4`,
            '-codec:v',
            'libx264',
            '-profile:v',
            'main',
            '-preset',
            'slow',
            '-b:v',
            '400k',
            '-maxrate',
            '400k',
            '-bufsize',
            '800k',
            '-vf',
            `scale=-2:${quality}`,
            '-threads',
            '0',
            '-b:a',
            '128k',
            `${parent}/resultado/${video}-${quality}.mp4`
        ])
*/


        ffmpeg.stderr.on('data',data=>{
            console.log(data)
        })

        ffmpeg.on('close',code=>{
            resolve(`${parent}/resultado/${video}-${quality}.mp4`)
        })
    })

    return p
}


async function processVideo(){
    let video = videos.pop()
    if(video){
        try {
            let res
            res = await resize(video, 720)
            res = await resize(video, 480)
            res = await resize(video, 360)

            console.log('Videos Renderizados', res)
            processVideo()
        } catch (error) {
            console.log(error)
        }
    }
}


