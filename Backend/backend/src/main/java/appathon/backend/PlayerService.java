package appathon.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlayerService {

	@Autowired
	private PlayersRepository repo;
	
	public List<Players> findScorers0() {
		return repo.findAllByOrderByGoalsDesc();
	}
	
	public List<Players> findScorers1(String Team) {
		return repo.findByTeamOrderByGoalsDesc(Team);
	}
	
	public List<Players> findScorers2(String Position) {
		return repo.findByPositionOrderByGoalsDesc(Position);
	}
	
	public List<Players> findScorers3(String Position, String Team) {
		return repo.findByPositionAndTeamOrderByGoalsDesc(Position, Team);
	}
	
	public List<Players> findAssists0() {
		return repo.findAllByOrderByAssistsDesc();
	}
	
	public List<Players> findAssists1(String Team) {
		return repo.findByTeamOrderByAssistsDesc(Team);
	}
	
	public List<Players> findAssists2(String Position) {
		return repo.findByPositionOrderByAssistsDesc(Position);
	}
	
	public List<Players> findAssists3(String Position, String Team) {
		return repo.findByPositionAndTeamOrderByAssistsDesc(Position, Team);
	}
	
	public List<Players> findCards0() {
		return repo.findAllByOrderByCardsDesc();
	}
	
	public List<Players> findCards1(String Team) {
		return repo.findByTeamOrderByCardsDesc(Team);
	}
	
	public List<Players> findCards2(String Position) {
		return repo.findByPositionOrderByCardsDesc(Position);
	}
	
	public List<Players> findCards3(String Position, String Team) {
		return repo.findByPositionAndTeamOrderByCardsDesc(Position, Team);
	}
}
