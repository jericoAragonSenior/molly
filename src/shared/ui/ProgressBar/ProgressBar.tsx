
import clsx from "clsx";
import cls from './ProgressBar.module.sass'

const ProgressBar = () => {
    return (
        <div className="w-full rounded-full h-2.5 bg-[#2A3246] relative">
            <div
                className={clsx("h-2.5 rounded-full", cls.progress_color)}
                style={{ width: `${30}%` }}
            ></div>
            <div className={clsx(" absolute w-5 h-5 rounded-large p-[5px]", cls.pointer)} style={{left: '30%'}}>
                <div className="w-full h-full rounded-large bg-[#0A7455]"></div>
            </div>
        </div>
    )
}

export default ProgressBar;