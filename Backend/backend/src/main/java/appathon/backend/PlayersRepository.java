package appathon.backend;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PlayersRepository extends JpaRepository<Players, String>{

	@Query
	List<Players> findAllByOrderByGoalsDesc();
	
	@Query
	List<Players> findByPositionAndTeamOrderByGoalsDesc(String Position, String Team);
	
	@Query
	List<Players> findByTeamOrderByGoalsDesc(String Team);
	
	@Query
	List<Players> findByPositionOrderByGoalsDesc(String Position);

	@Query
	List<Players> findAllByOrderByAssistsDesc();
	
	@Query
	List<Players> findByPositionAndTeamOrderByAssistsDesc(String Position, String Team);
	
	@Query
	List<Players> findByTeamOrderByAssistsDesc(String Team);
	
	@Query
	List<Players> findByPositionOrderByAssistsDesc(String Position);
	
	@Query
	List<Players> findAllByOrderByCardsDesc();
	
	@Query
	List<Players> findByPositionAndTeamOrderByCardsDesc(String Position, String Team);
	
	@Query
	List<Players> findByTeamOrderByCardsDesc(String Team);
	
	@Query
	List<Players> findByPositionOrderByCardsDesc(String Position);
}
