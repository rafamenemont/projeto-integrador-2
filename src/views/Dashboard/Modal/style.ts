import styled from "styled-components";
import { IoWalletOutline, IoClose, IoTrashOutline } from 'react-icons/io5';
import { IoIosCloseCircleOutline, IoMdCheckmark } from 'react-icons/io';
import { MdOutlineAttachMoney, MdOutlineMoneyOffCsred } from 'react-icons/md';

export const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background: ${({ theme }) => theme.blackOpacity};
`

export const ModalContent = styled.div`
    width: 1000px;
    height: fit-content;
    padding: 32px;
    border-radius: 25px;

    background: ${({ theme }) => theme.black};

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 100%;

        overflow-y: auto;
    }
`

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    flex-wrap: wrap;

    position: relative;

    border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
`

export const ModalRow = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    margin-bottom: 50px;

    > h1 {
        font-family: ${({ theme }) => theme.fontTheme};

        font-size: 18px;
        font-weight: 600;
    }
`

export const ModalBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    width: 100%;
    flex-wrap: wrap;

    padding: 30px 0;
`

export const ModalFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    width: 100%;

    padding-top: 50px;
`

export const GroupBtn = styled.div`
    display: flex;
    gap: 15px;

    @media only screen and (max-width: 768px) {
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
    }
`

export const IconWallet = styled(IoWalletOutline)`
    font-size: 18px;
    color: ${({ theme }) => theme.text};
`

export const IconClose = styled(IoIosCloseCircleOutline)`
    font-size: 24px;
    color: ${({ theme }) => theme.text};

    position: absolute;
    top: 0;
    right: 0;

    cursor: pointer;

    &:hover {
        color: lightcoral;
    }
`

export const IconReceive = styled(MdOutlineAttachMoney)`
    font-size: 18px;
    color: ${({ theme }) => theme.text};
    margin-left: -5px;
`

export const IconPay = styled(MdOutlineMoneyOffCsred)`
    font-size: 18px;
    color: ${({ theme }) => theme.text};
    margin-left: -5px;
`

export const IconConfirm = styled(IoMdCheckmark)`
    font-size: 18px;
    color: ${({ theme }) => theme.text};
    margin-left: -5px;
`

export const IconCancel = styled(IoClose)`
    font-size: 18px;
    color: ${({ theme }) => theme.text};
    margin-left: -5px;
`

export const IconTrash = styled(IoTrashOutline)`
    font-size: 18px;
    color: ${({ theme }) => theme.text};
    margin-left: -5px;
`