"use client";
import "../globals.css";

type StatusProps = {
    status: StatusKey;
    size?: "sm" | "md" | "lg";
};

export type StatusKey = keyof typeof statusColors;

const statusColors = {
    planned: "#0a4dff",
    completed: "#00ff00",
    inprogress: "#fbe83a",
    paused: "#ff5f0e",
};

const statusText = {
    planned: "Planned",
    completed: "Completed",
    inprogress: "In Progress",
    paused: "Paused",
};

const statusTextColors = {
    planned: "#000",
    completed: "#000",
    inprogress: "#000",
    paused: "#000",
};

const statusClassP = {
    sm: "text-xl text-left mt-6 2xl:mb-4 py-2 align-middle w-fit",
    md: "text-xl sm:text-3xl text-left mt-6 2xl:mb-4 py-2 align-middle w-fit",
    lg: "text-xl sm:text-4xl text-left mt-6 2xl:mb-4 py-2 align-middle w-fit",
};

const statusClassSpan = {
    sm: "rounded px-2 py-1 text-lg font-semibold ml-2",
    md: "rounded px-2 py-1 text-lg sm:text-2xl font-semibold ml-2",
    lg: "rounded px-2 py-1 text-lg sm:text-3xl font-semibold ml-2",
};

export default function Status({ status, size = "sm" }: StatusProps) {
    return (
        <p className={statusClassP[size]}>
            Status:{" "}
            <span
                className={statusClassSpan[size]}
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
