export type ProgressGameType = {
    status: ProgressGameStatus;
    wins: number;
    lose: number;
    time: number;
    wasWinner: boolean;
  };

export enum ProgressGameStatus {
    EMPTY = "EMPTY",
    IN_PROGRESS = "IN_PROGRESS",
    FINISHED = "FINISHED"
}

export type TileExampleProps = {
    background: string;
    letter: string;
  };

export type RowPros = {
    id: number
}

export type TileProps = {
    id: number,
    rowId: number
}

export type KeyProps = {
    letter: string
}