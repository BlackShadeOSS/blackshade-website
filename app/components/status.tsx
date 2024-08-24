"use client";
import "../globals.css";

type StatusProps = {
    status: StatusKey;
};

export type StatusKey = keyof typeof statusColors;

const statusColors = {
    completed: "#00ff00",
    inprogress: "#fbe83a",
    paused: "#ff5f0e",
};

const statusText = {
    completed: "Completed",
    inprogress: "In Progress",
    paused: "Paused",
};

const statusTextColors = {
    completed: "#000",
    inprogress: "#000",
    paused: "#000",
};

export default function Status({ status }: StatusProps) {
    return (
        <p className="px-4 text-xl text-left mt-6 2xl:mb-4 py-2 align-middle w-full 2xl:w-1/2">
            Status:{" "}
            <span
                className="rounded px-2 py-1 text-lg font-semibold ml-2"
                style={{
                    backgroundColor: statusColors[status],
                    color: statusTextColors[status],
                }}
            >
                {statusText[status]}
            </span>
        </p>
    );
}
