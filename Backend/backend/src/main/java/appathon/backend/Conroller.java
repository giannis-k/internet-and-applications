package appathon.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Conroller {

	@Autowired
	private TeamService t_service;
	
	@Autowired
	private PlayerService p_service;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/LeagueTable")
	public ResponseEntity<List<Teams>> list() {
		return new ResponseEntity<List<Teams>>(t_service.listAll(), HttpStatus.OK);
	}
		
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/Goals/{team}/{position}")
	public ResponseEntity<List<Players>> listGoals(@PathVariable String team, @PathVariable String position) {
		if(team.equals("All") && position.equals("All"))
			return new ResponseEntity<List<Players>>(p_service.findScorers0(), HttpStatus.OK);
		if(position.equals("All"))
			return new ResponseEntity<List<Players>>(p_service.findScorers1(team), HttpStatus.OK);
		if(team.equals("All"))
			return new ResponseEntity<List<Players>>(p_service.findScorers2(position), HttpStatus.OK);
		return new ResponseEntity<List<Players>>(p_service.findScorers3(position, team), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/Assists/{team}/{position}")
	public ResponseEntity<List<Players>> listAssists(@PathVariable String team, @PathVariable String position) {
		if(team.equals("All") && position.equals("All"))
			return new ResponseEntity<List<Players>>(p_service.findAssists0(), HttpStatus.OK);
		if(position.equals("All"))
			return new ResponseEntity<List<Players>>(p_service.findAssists1(team), HttpStatus.OK);
		if(team.equals("All"))
			return new ResponseEntity<List<Players>>(p_service.findAssists2(position), HttpStatus.OK);
		return new ResponseEntity<List<Players>>(p_service.findAssists3(position, team), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/Cards/{team}/{position}")
	public ResponseEntity<List<Players>> listCards(@PathVariable String team, @PathVariable String position) {
		if(team.equals("All") && position.equals("All"))
			return new ResponseEntity<List<Players>>(p_service.findCards0(), HttpStatus.OK);
		if(position.equals("All"))
			return new ResponseEntity<List<Players>>(p_service.findCards1(team), HttpStatus.OK);
		if(team.equals("All"))
			return new ResponseEntity<List<Players>>(p_service.findCards2(position), HttpStatus.OK);
		return new ResponseEntity<List<Players>>(p_service.findCards3(position, team), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/Appearances/{team}/{position}")
	public ResponseEntity<List<Players>> listAppearances(@PathVariable String team, @PathVariable String position) {
		if(team.equals("All") && position.equals("All"))
			return new ResponseEntity<List<Players>>(p_service.findAppearances0(), HttpStatus.OK);
		if(position.equals("All"))
			return new ResponseEntity<List<Players>>(p_service.findAppearances1(team), HttpStatus.OK);
		if(team.equals("All"))
			return new ResponseEntity<List<Players>>(p_service.findAppearances2(position), HttpStatus.OK);
		return new ResponseEntity<List<Players>>(p_service.findAppearances3(position, team), HttpStatus.OK);
	}

}
