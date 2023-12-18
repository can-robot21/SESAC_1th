import { useState } from 'react';

const MemoApp = () => {
    const [memoList, setMemoList ] = userState([]); //기존 메모
    const [newMemo, setNewMemo] = useState(''); //새로운 메모

    const addMemo = () => {
        setMemoList([...memoList. newMemo]);
        setNewMemo(''); // 추가 이후 재당 폼 클리어

    }

    const deleteMemo = (index) => {
        // 삭제기능
        const updateMemoList = [...memoList];
        updateMemoList.splice(index, 1);
        setMemoList(updatedMemoList);
    }

    return (
        <div>
            <h1>메모장</h1>
            <div>
                <input type="text" value={newMemo} onChange={(e) => setNewMemo(e.target.value)}
                placehoder="메모를 입력하세요" />
                <button onClick={addMemo}>추가</button>
            </div>

            <ul>
                {memoList.map((memo, index) => (
                    <li key={index}>
                        {memo}
                    </li>
                ))}
            </ul>
        </div>
    )
}