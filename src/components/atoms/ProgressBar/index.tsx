import { ProgressBarProps } from './index.types';
import S from './index.styled';
import { useState } from 'react';

const ProgressBar = ({ percentage = 0 }: ProgressBarProps) => {
    const [focus, setFocus] = useState(false);

    let progress_status: 'nomal' | 'warn' | 'danger';

    if (percentage < 30) {
        progress_status = 'nomal';
    } else if (percentage < 70) {
        progress_status = 'warn';
    } else {
        progress_status = 'danger';
    }
    const onMouseOver = () => {
        setFocus(true);
    };
    const onMouseLeave = () => {
        setFocus(false);
    };

    return (
        <S.ProgressBar>
            <S.CurrentProgreeBar
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                progress_status={progress_status}
                percentage={percentage}
            >
                <S.ProgressToolTip $focus={focus}>{percentage}%</S.ProgressToolTip>
            </S.CurrentProgreeBar>
        </S.ProgressBar>
    );
};

export default ProgressBar;
