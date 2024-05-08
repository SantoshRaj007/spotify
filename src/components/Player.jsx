import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const {seekBar, seekBg,playStatus,play,pause} = useContext(PlayerContext);

    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={songsData[0].image} alt='song-img' />
                <div>
                    <p>{songsData[0].name}</p>
                    <p>{songsData[0].desc.slice(0,12)}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt='shuffle-icon' />
                    <img className='w-4 cursor-pointer' src={assets.prev_icon} alt='prev-icon' />
                    {
                        playStatus
                        ?<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt='play-icon' />
                        :<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt='play-icon' />
                    }
                    <img className='w-4 cursor-pointer' src={assets.next_icon} alt='next-icon' />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt='loop-icon' />
                </div>
                <div className='flex items-center gap-5'>
                    <p>1:06</p>
                    <div ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-10 bg-[#6d4aae] rounded-full' />
                    </div>
                    <p>3:20</p>
                </div>
            </div>
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img className='w-4' src={assets.plays_icon} alt='play-icons' />
                <img className='w-4' src={assets.mic_icon} alt='mic-icons' />
                <img className='w-4' src={assets.queue_icon} alt='queue-icons' />
                <img className='w-4' src={assets.speaker_icon} alt='speaker-icons' />
                <img className='w-4' src={assets.volume_icon} alt='volume-icons' />
                <div className='w-20 bg-slate-50 h-1 rounded'></div>
                <img className='w-4' src={assets.mini_player_icon} alt='mini-play-icons' />
                <img className='w-4' src={assets.zoom_icon} alt='zoom-icons' />
            </div>
        </div>
    )
}

export default Player