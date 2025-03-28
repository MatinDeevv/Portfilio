import React from 'react';

const Stats = () => {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h2>:zap; Stats :zap:</h2>
      <div>
        <img
          width="390"
          src="https://github-readme-streak-stats-salesp07.vercel.app/?user=MatinDeevv&count_private=true&theme=react&border_radius=10"
          alt="streak stats"
        />
        <img
          width="390"
          src="https://github-readme-stats-salesp07.vercel.app/api?username=MatinDeevv&count_private=true&show_icons=true&theme=react&rank_icon=github&border_radius=10"
          alt="readme stats"
        />
        <br />
        <img
          width="325"
          src="https://github-readme-stats-salesp07.vercel.app/api/top-langs/?username=MatinDeevv&hide=HTML&langs_count=8&layout=compact&theme=react&border_radius=10&size_weight=0.5&count_weight=0.5&exclude_repo=github-readme-stats"
          alt="top langs"
        />
      </div>
    </div>
  );
};

export default Stats;
