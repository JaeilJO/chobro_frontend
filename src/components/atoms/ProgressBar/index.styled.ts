import { styled } from 'styled-components';
import { FontSizeType } from '../../../styles/theme';
import Link from 'next/link';

interface CurrentProgreeBarProps {
    percentage: number;
    progress_status: 'nomal' | 'warn' | 'danger';
}

interface ProgressToolTipProps {
    $focus: boolean;
}

const S = {
    ProgressBar: styled.div`
        background-color: ${({ theme }) => theme.LIGHT.COLOR.GRAY};
        height: 30px;
        border-radius: 5em;
    `,

    CurrentProgreeBar: styled.div<CurrentProgreeBarProps>`
        position: relative;
        background-color: ${({ theme, progress_status }) =>
            progress_status === 'nomal'
                ? theme.LIGHT.COLOR.SECOND
                : progress_status === 'warn'
                ? theme.LIGHT.COLOR.WARNING
                : theme.LIGHT.COLOR.DANGER};
        height: 100%;
        width: ${({ percentage }) => percentage}%;
        height: 30px;
        border-radius: 5em;
        cursor: pointer;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
                rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        }
    `,

    ProgressToolTip: styled.div<ProgressToolTipProps>`
        position: absolute;
        left: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.MD};
        top: ${({ $focus }) => ($focus ? `120%` : `50%`)};
        opacity: ${({ $focus }) => ($focus ? `100%` : `0%`)};
        border-radius: 10px;
        padding: 1em 2em;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        background-color: ${({ theme }) => theme.LIGHT.COLOR.WHITE};
        transition: 280ms;
    `,
};

export default S;
