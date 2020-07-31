package appathon.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Conroller {

	@Autowired
	private TeamService t_service;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/LeagueTable")
	public ResponseEntity<List<Teams>> list() {
		return new ResponseEntity<List<Teams>>(t_service.listAll(), HttpStatus.OK);
	}
}
