'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

export default function LoadingTeam() {
  return (
    <ProgressBar
    height="1px"
    color="#ffff"
    options={{ showSpinner: false }}
    shallowRouting
  />
  );
}
