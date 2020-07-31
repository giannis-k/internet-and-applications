package appathon.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamService {

	@Autowired
	private TeamsRepository repo;
	
	public List<Teams> listAll() {
		return repo.findAllByOrderByPointsDesc();
	}
}
